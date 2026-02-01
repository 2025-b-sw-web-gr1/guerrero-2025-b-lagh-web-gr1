import { Controller, Post, Req, Res } from '@nestjs/common';
// import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
    @Post('login')
    login(@Req() req: any, @Res() res: any) {
        const { username, password } = req.body;
        // Check if session exists
        if (req.session && req.session.user) {
            return res.status(400).json({
                message: 'Ya existe una sesión activa, deslogee primero.',
            });
        }
        // Hardcoded credentials verification
        if (username === 'admin' && password === '12345678') {
            req.session.user = 'admin'; // Store only username
            return res.json({ message: 'Login exitoso', user: req.session.user });
        } else {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }
    }

    @Post('logout')
    logout(@Req() req: any, @Res() res: any) {
        if (req.session && req.session.user) {
            req.session.destroy((err) => {
                if (err) {
                    return res.status(500).json({ message: 'Error al cerrar sesión' });
                }
                return res.json({ message: 'Sesión cerrada correctamente' });
            });
        } else {
            return res.status(400).json({ message: 'No hay sesión activa' });
        }
    }
}
