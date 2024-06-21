import React, { useState, useEffect } from 'react';
import dummyData from './dummy.json'; // Import file JSON
import Pagination from './pagination'
import './table.css'

function Table() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5); // Jumlah item per halaman
    const [data, setData] = useState([]);

    // Data dummy untuk tabel
    useEffect(() => {
        setData(dummyData);
    }, []);

    // Menghitung indeks item untuk pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Fungsi untuk mengubah halaman
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div>
            <h2>Data Table</h2>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Pagination */}
            <div>
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={data.length}
                    paginate={paginate}
                />
            </div>
        </div>
    )
}

export default Table