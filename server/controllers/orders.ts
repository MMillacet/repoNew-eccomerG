import { Request, Response, RequestHandler } from 'express';
import ordersApi from '../api/orders';

const create: RequestHandler = async (req: Request, res: Response) => {
    const data = req.body;
    try {
        const response = await ordersApi.create(data);
        res.send(response.data);
    } catch (error: any) {
        res.status(400).send({
            reason: 'Ha ocurrido un error al conectarse a Goldfarb',
            description: error.message,
        });
    }
};

export default { create };

// var LineSchema = mongoose.Schema({
//     currency: {type:String, required:'{PATH} is required!'},
//     description: {type:String, required:'{PATH} is required!'},
//     discount: {type:Number, required:'{PATH} is required!'},
//     itemcode: {type:String, required:'{PATH} is required!'},
//     price: {type:Number, required:'{PATH} is required!'},
//     quantity: {type:Number, required:'{PATH} is required!'},
//     total: {type:Number, required:'{PATH} is required!'},
// });

// var orderSchema = mongoose.Schema({
//   header: {
//       cardcode: {type:String, required:'{PATH} is required!'},
//       cardname: {type:String, required:'{PATH} is required!'},
//       discount: {type:Number, required:'{PATH} is required!'},
//       remito: {type:Boolean, required:'{PATH} is required!'},
//       shipToCode: {type:String, required:'{PATH} is required!'},
//       tipoMov: {type:String, required:'{PATH} is required!'},
//       tipoPed: {type:String, required:'{PATH} is required!'},
//   },
//   lines: [LineSchema],
//   date: {type:Date, default: Date.now},
//   done: {type:Boolean, default: false},
// });
