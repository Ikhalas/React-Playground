import {
  PRODUCTS_FETCH,
  PRODUCT_FETCH,
  PRODUCTS_CREATE,
  PRODUCTS_UPDATE,
} from '../type';

export default function (state = [], action) {
  switch (action.type) {
    case PRODUCTS_FETCH:
    case PRODUCT_FETCH:
      return action.payload;
    case PRODUCTS_CREATE:
      return { saved: true, msg: 'บันทึกสินค้าเรียบร้อย' };
    case PRODUCTS_UPDATE:
      return { ...state, saved: true, msg: 'บันทึกสินค้าเรียบร้อย' }; // ส่งค่าเดิมกลับไปด้วย
    default:
      return state;
  }
}
