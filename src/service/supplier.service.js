import axios from 'axios';

const API_URL = 'http://44.200.94.118:8080/api/suppliers';

class SupplierService {
  saveSupplier(supplier) {
    return axios.post(`${API_URL}/saveSupplier`, supplier);
  }

  getAllSuppliers() {
    return axios.get(`${API_URL}/`);
  }

  getSupplierById(id) {
    return axios.get(`${API_URL}/${id}`);
  }

  deleteSupplier(id) {
    return axios.delete(`${API_URL}/deleteSupplier/${id}`);
  }

  editSupplier(supplier) {
    return axios.put(`${API_URL}/editSupplier/${supplier.id}`, supplier);
  }
}

export default new SupplierService();
