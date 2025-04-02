# 🏗️ Criando Repositórios, Controladores e Rotas para Order e OrderItem

## Criando os Repositórios

#### Repositório de Pedidos (`OrderRepository`)

```ts
import { AppDataSource } from "../data-source";
import { Order } from "../models/Order";

export class OrderRepository {
  private orderRepository = AppDataSource.getRepository(Order);

  async createOrder(userId: number, status: string) {
    const order = new Order();
    order.user = { id: userId } as any; // Associar o usuário
    order.status = status;
    return await this.orderRepository.save(order);
  }

  async findAllOrders() {
    return await this.orderRepository.find({ relations: ["user", "items"] });
  }

  async findOrderById(id: number) {
    return await this.orderRepository.findOne({ where: { id }, relations: ["user", "items"] });
  }

  async updateOrderStatus(id: number, status: string) {
    const order = await this.findOrderById(id);
    if (!order) return null;
    order.status = status;
    return await this.orderRepository.save(order);
  }

  async deleteOrder(id: number) {
    const order = await this.findOrderById(id);
    if (!order) return null;
    return await this.orderRepository.remove(order);
  }
}
```

#### Repositório de Itens de Pedido (`OrderItemRepository`)

```ts
import { AppDataSource } from "../data-source";
import { OrderItem } from "../models/OrderItem";

export class OrderItemRepository {
  private orderItemRepository = AppDataSource.getRepository(OrderItem);

  async createOrderItem(orderId: number, dishId: number, quantity: number) {
    const orderItem = new OrderItem();
    orderItem.order = { id: orderId } as any;
    orderItem.dish = { id: dishId } as any;
    orderItem.quantity = quantity;
    return await this.orderItemRepository.save(orderItem);
  }
}
```

---

## Criando os Controladores

#### Controlador de Pedidos (`OrderController`)

```ts
import { Request, Response } from "express";
import { OrderRepository } from "../repositories/OrderRepository";

const orderRepo = new OrderRepository();

export class OrderController {
  static async createOrder(req: Request, res: Response): Promise<Response> {
    const { userId, status } = req.body;
    try {
      const order = await orderRepo.createOrder(userId, status);
      return res.status(201).json(order);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao criar pedido", error });
    }
  }

  static async getAllOrders(req: Request, res: Response): Promise<Response> {
    try {
      const orders = await orderRepo.findAllOrders();
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao listar pedidos", error });
    }
  }

  static async getOrderById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const order = await orderRepo.findOrderById(Number(id));
      if (!order) return res.status(404).json({ message: "Pedido não encontrado" });
      return res.status(200).json(order);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao buscar pedido", error });
    }
  }

  static async updateOrderStatus(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { status } = req.body;
    try {
      const updatedOrder = await orderRepo.updateOrderStatus(Number(id), status);
      if (!updatedOrder) return res.status(404).json({ message: "Pedido não encontrado" });
      return res.status(200).json(updatedOrder);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao atualizar status", error });
    }
  }

  static async deleteOrder(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const deletedOrder = await orderRepo.deleteOrder(Number(id));
      if (!deletedOrder) return res.status(404).json({ message: "Pedido não encontrado" });
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: "Erro ao excluir pedido", error });
    }
  }
}
```

---

## Criando as Rotas

#### Rotas de Pedido (`orderRoutes`)

```ts
import { Router } from "express";
import { OrderController } from "../controllers/OrderController";

// Instanciando o roteador
const router = Router();

// Usando arrow functions para preservar o contexto de 'this' automaticamente
router.post("/orders", (req, res) => OrderController.createOrder(req, res));
router.get("/orders", (req, res) => OrderController.getAllOrders(req, res));
router.get("/orders/:id", (req, res) => OrderController.getOrderById(req, res));
router.put("/orders/:id", (req, res) => OrderController.updateOrderStatus(req, res));
router.delete("/orders/:id", (req, res) => OrderController.deleteOrder(req, res));

export default router;
```

---

## Configuração do Express e Início do Servidor

#### Inicializando o Servidor

```ts
import express from "express";
import orderRoutes from "./routes/orderRoutes";

const app = express();
app.use(express.json()); // Para parsing de JSON

// Usar as rotas
app.use("/api", orderRoutes);

// Iniciar o servidor
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```