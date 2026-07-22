import { useEffect, useState } from "react";
import api from "../services/api";

function Customers() {
  const [customers, setCustomers] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const res = await api.get("/customers");
      setCustomers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await api.put(`/customers/${editId}`, {
          name,
          email,
          phone,
          address,
        });

        alert("Customer Updated Successfully");
      } else {
        await api.post("/customers", {
          name,
          email,
          phone,
          address,
        });

        alert("Customer Added Successfully");
      }

      clearForm();
      fetchCustomers();
    } catch (err) {
      alert("Something went wrong");
    }
  };

  const editCustomer = (customer) => {
    setEditId(customer.id);
    setName(customer.name);
    setEmail(customer.email);
    setPhone(customer.phone);
    setAddress(customer.address);
  };

  const deleteCustomer = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/customers/${id}`);
      alert("Customer Deleted Successfully");
      fetchCustomers();
    } catch (err) {
      alert("Delete Failed");
    }
  };

  const clearForm = () => {
    setEditId(null);
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Customer Management</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">
          {editId ? "Update Customer" : "Add Customer"}
        </button>

        {editId && (
          <button
            type="button"
            onClick={clearForm}
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </button>
        )}
      </form>

      <br />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.address}</td>

              <td>
                <button
                  onClick={() => editCustomer(customer)}
                  style={{ marginRight: "10px" }}
                >
                  Edit
                </button>

                <button onClick={() => deleteCustomer(customer.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;