import { useEffect, useState } from "react";
import api from "../services/api";

function Customers() {
  const [customers, setCustomers] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [customerType, setCustomerType] = useState("Retail");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("Lead");
  const [followUpDate, setFollowUpDate] = useState("");
  const [notes, setNotes] = useState("");

  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchCustomers();
  }, [search]);

  const fetchCustomers = async () => {
    try {
      const res = await api.get(`/customers?search=${search}`);
      setCustomers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const customerData = {
        name,
        email,
        phone,
        business_name: businessName,
        gst_number: gstNumber,
        customer_type: customerType,
        address,
        status,
        follow_up_date: followUpDate,
        notes,
      };

      if (editId) {
        await api.put(`/customers/${editId}`, customerData);
        alert("Customer Updated Successfully");
      } else {
        await api.post("/customers", customerData);
        alert("Customer Added Successfully");
      }

      clearForm();
      fetchCustomers();
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  const editCustomer = (customer) => {
    setEditId(customer.id);

    setName(customer.name || "");
    setEmail(customer.email || "");
    setPhone(customer.phone || "");
    setBusinessName(customer.business_name || "");
    setGstNumber(customer.gst_number || "");
    setCustomerType(customer.customer_type || "Retail");
    setAddress(customer.address || "");
    setStatus(customer.status || "Lead");
    setFollowUpDate(customer.follow_up_date || "");
    setNotes(customer.notes || "");
  };

  const deleteCustomer = async (id) => {
    if (!window.confirm("Delete this customer?")) return;

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
    setBusinessName("");
    setGstNumber("");
    setCustomerType("Retail");
    setAddress("");
    setStatus("Lead");
    setFollowUpDate("");
    setNotes("");
  };

  return (
    <div
      className="container-fluid py-4"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right,#eef2ff,#dbeafe)",
      }}
    >
      <h2
        className="text-center fw-bold mb-4"
        style={{ color: "#1e3a8a" }}
      >
        👥 Customer Management
      </h2>

      <div className="row justify-content-center">
        <div className="col-lg-11">

          <div className="card shadow-lg">

            <div className="card-body">

              <div className="mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="🔍 Search Customer..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <form onSubmit={handleSubmit}>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Customer Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Email
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Phone
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Business Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      value={businessName}
                      onChange={(e) =>
                        setBusinessName(e.target.value)
                      }
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      GST Number
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      value={gstNumber}
                      onChange={(e) =>
                        setGstNumber(e.target.value)
                      }
                    />
                  </div>
                                    <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Customer Type
                    </label>

                    <select
                      className="form-select"
                      value={customerType}
                      onChange={(e) =>
                        setCustomerType(e.target.value)
                      }
                    >
                      <option value="Retail">Retail</option>
                      <option value="Wholesale">Wholesale</option>
                      <option value="Distributor">Distributor</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Address
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      value={address}
                      onChange={(e) =>
                        setAddress(e.target.value)
                      }
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Status
                    </label>

                    <select
                      className="form-select"
                      value={status}
                      onChange={(e) =>
                        setStatus(e.target.value)
                      }
                    >
                      <option value="Lead">Lead</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Follow Up Date
                    </label>

                    <input
                      type="date"
                      className="form-control"
                      value={followUpDate}
                      onChange={(e) =>
                        setFollowUpDate(e.target.value)
                      }
                    />
                  </div>

                  <div className="col-12 mb-3">
                    <label className="form-label">
                      Notes
                    </label>

                    <textarea
                      rows="3"
                      className="form-control"
                      value={notes}
                      onChange={(e) =>
                        setNotes(e.target.value)
                      }
                    />
                  </div>

                  <div className="col-12">

                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      {editId
                        ? "Update Customer"
                        : "Add Customer"}
                    </button>

                    {editId && (
                      <button
                        type="button"
                        className="btn btn-secondary ms-2"
                        onClick={clearForm}
                      >
                        Cancel
                      </button>
                    )}

                  </div>

                </div>

              </form>

            </div>

          </div>

          <div className="table-responsive mt-4">

            <table className="table table-bordered table-hover table-striped shadow">

              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Business</th>
                  <th>GST</th>
                  <th>Type</th>
                  <th>Address</th>
                  <th>Status</th>
                  <th>Follow Up</th>
                  <th>Notes</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                {customers.length === 0 ? (

                  <tr>
                    <td colSpan="12" className="text-center">
                      No Customers Found
                    </td>
                  </tr>

                ) : (

                  customers.map((customer) => (

                    <tr key={customer.id}>

                      <td>{customer.id}</td>
                      <td>{customer.name}</td>
                      <td>{customer.email}</td>
                      <td>{customer.phone}</td>
                      <td>{customer.business_name}</td>
                      <td>{customer.gst_number}</td>
                      <td>{customer.customer_type}</td>
                      <td>{customer.address}</td>

                      <td>
                        <span
                          className={`badge ${
                            customer.status === "Active"
                              ? "bg-success"
                              : customer.status === "Inactive"
                              ? "bg-danger"
                              : "bg-warning text-dark"
                          }`}
                        >
                          {customer.status}
                        </span>
                      </td>

                      <td>{customer.follow_up_date}</td>

                      <td>{customer.notes}</td>

                      <td>

                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() =>
                            editCustomer(customer)
                          }
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-danger btn-sm ms-2"
                          onClick={() =>
                            deleteCustomer(customer.id)
                          }
                        >
                          Delete
                        </button>

                      </td>

                    </tr>

                  ))

                )}

              </tbody>

            </table>

          </div>

        </div>
      </div>

    </div>
  );
}

export default Customers;
