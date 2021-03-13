import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({
        msg: "hey man"
    })
})

export default router;