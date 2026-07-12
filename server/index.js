import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
const app = express(),
    SECRET = process.env.JWT_SECRET || 'change-this-development-secret-before-production',
    PORT = 3001;
app.use(cors({
    origin: (origin, cb) => {
        if (!origin || /^http:\/\/localhost:517\d$/.test(origin)) return cb(null, true);
        cb(new Error('CORS origin not allowed'))
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
const permissions = {
    manager: ['*'],
    driver: ['dashboard', 'my-trips', 'profile'],
    safety: ['dashboard', 'drivers', 'maintenance', 'safety-reports'],
    finance: ['dashboard', 'expenses', 'fuel-logs', 'reports', 'analytics']
};
const seed = [
    ['Jordan Davis', 'manager@transitops.com', 'Fleet Manager', 'manager'],
    ['Amit Sharma', 'driver@transitops.com', 'Driver', 'driver'],
    ['Priya Nair', 'safety@transitops.com', 'Safety Officer', 'safety'],
    ['Alex Morgan', 'finance@transitops.com', 'Financial Analyst', 'finance']
];
const users = await Promise.all(seed.map(async ([name, email, role, key]) => ({
    id: key,
    name,
    email,
    role,
    key,
    password: await bcrypt.hash('Password@123', 12)
})));
const publicUser = u => ({
    id: u.id,
    name: u.name,
    email: u.email,
    role: u.role,
    key: u.key,
    permissions: permissions[u.key]
});
const token = u => jwt.sign({
    sub: u.id,
    role: u.key
}, SECRET, {
    expiresIn: '8h',
    issuer: 'transitops'
});

function auth(req, res, next) {
    let h = req.headers.authorization || '';
    try {
        req.user = jwt.verify(h.replace('Bearer ', ''), SECRET, {
            issuer: 'transitops'
        });
        next()
    } catch {
        return res.status(401).json({
            error: 'Authentication required or token has expired.'
        })
    }
}

function allow(...roles) {
    return (req, res, next) => roles.includes(req.user.role) || req.user.role === 'manager' ? next() : res.status(403).json({
        error: 'Access denied.'
    })
}
app.get('/api/health', (_, res) => res.json({
    ok: true,
    service: 'TransitOps API'
}));
app.post('/api/auth/login', async (req, res) => {
    const {
        email,
        password
    } = req.body;
    if (!email || !password) return res.status(400).json({
        error: 'Email and password are required.'
    });
    let u = users.find(x => x.email === email.toLowerCase());
    if (!u || !(await bcrypt.compare(password, u.password))) return res.status(401).json({
        error: 'Invalid email or password.'
    });
    res.json({
        token: token(u),
        user: publicUser(u)
    })
});
app.get('/api/auth/me', auth, (req, res) => {
    let u = users.find(x => x.id === req.user.sub);
    u ? res.json({
        user: publicUser(u)
    }) : res.status(401).json({
        error: 'User not found.'
    })
});
app.post('/api/auth/logout', auth, (_, res) => res.status(204).end());
app.get('/api/vehicles', auth, allow('manager', 'safety'), (_, res) => res.json([{
    id: 1,
    registrationNumber: 'MH 12 AB 4182',
    name: 'Mercedes Actros 1845',
    status: 'On Trip'
}]));
app.post('/api/trips/:id/dispatch', auth, allow('manager'), (_, res) => res.json({
    message: 'Trip dispatched.'
}));
app.listen(PORT, () => console.log(`TransitOps API running on port ${PORT}`));