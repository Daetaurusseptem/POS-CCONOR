"use strict";
// src/routes/ItemRoutes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const itemsController_1 = require("../controllers/itemsController");
const router = express_1.default.Router();
router.post('/', itemsController_1.createItem);
router.get('/', itemsController_1.getAllItems);
router.get('/company/:companyId', itemsController_1.getAllCompanyItemsPagination);
router.get('/:id', itemsController_1.getItemById);
router.put('/:id', itemsController_1.updateItem);
router.delete('/:id', itemsController_1.deleteItem);
exports.default = router;
