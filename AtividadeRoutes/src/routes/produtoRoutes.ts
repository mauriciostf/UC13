import { Produtos } from "../models/Produtos";
import { Router, Request, Response } from "express";
import { produtos } from "../database";

const router = Router();

router.post('/produtos', (req: Request, res: Response) => {
    const { id, nome, preco } = req.body;
    const novoProduto = new Produtos(id, nome, preco);
    produtos.push(novoProduto);
    res.status(201).json({ mensagem: "Produto criado com sucesso!", produto: novoProduto });
});

router.get('/produtos', (req: Request, res: Response) => {
    if (produtos.length == 0) {
        res.status(404).json({ mensagem: "Não existem produtos cadastrados!" });
    } else {
        res.status(200).json(produtos);
    }
});

router.put('/produtos/:id', (req: Request, res: Response) => {
    const id: number = Number(req.params.id)

    const nome: string = String(req.body.nome)
    const preco: number = Number(req.body.preco)

    if (!id) {
        res.status(400).json({ mensagem: "ID é obrigatório!" })
    } else {
        produtos.forEach(produto => {
            if (produto.id == id) {
                produto.nome = nome;
                produto.preco = preco;
                res.status(200).json({ mensagem: "Produto alterado com sucesso!", produto: produto })
                return
            } else {
                res.status(404).json({ mensagem: "Produto não encontrado!" })
                return
            }
        })
    }
});

router.delete('/produtos/:id', (req: Request, res: Response) => {
    const id: number = Number(req.params.id);

    if (!id) {
        res.status(400).json({ mensagem: "ID é obrigatório!" });
        return 
    }

    const produtoIndex = produtos.findIndex(produto => produto.id === id);

    if (produtoIndex === -1) {
        res.status(404).json({ mensagem: "Produto não encontrado!" });
        return 
    }
    produtos.splice(produtoIndex, 1);

    res.status(204).send();
    return 
});

export default router;