import React, { useState, useEffect } from 'react';
import Lottie from "lottie-react";
import Loader from "../../public/lottie_loader.json";

const Table: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Replace this with your actual data fetching logic
      const response = []; 
      setData(response);
    };
    fetchData();
  }, []);

  return (
    <>
      <section className='w-full'>
        <p className='font-semibold text-4xl capitalize text-center py-5 text-gray-700'>List of members with summary information</p>
        <div className='container mx-auto px-4 py-6'>
          <div className="overflow-x-auto">
            <table className="min-w-full shadow-md rounded-xl bg-white">
              <thead className="bg-gray-200 text-gray-700 rounded-md">
                <tr>
                  <th className="font-normal py-3 px-4 border-b border-gray-300">Member ID</th>
                  <th className="font-normal py-3 px-4 border-b border-gray-300">First Name</th>
                  <th className="font-normal py-3 px-4 border-b border-gray-300">Last Name</th>
                  <th className="font-normal py-3 px-4 border-b border-gray-300">Assoc. Acronym</th>
                  <th className="font-normal py-3 px-4 border-b border-gray-300">Association</th>
                  <th className="font-normal py-3 px-4 border-b border-gray-300">Promotion Year</th>
                  <th className="font-normal py-3 px-4 border-b border-gray-300">Country</th>
                </tr>
              </thead>
              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-3 px-4 border-b border-gray-300 text-center">
                      <div className='w-20 mx-auto'>
                        <Lottie loop={true} animationData={Loader} />
                      </div>
                      <p className='mt-2 text-gray-500'>No data available</p>
                    </td>
                  </tr>
                ) : (
                  data.map((member, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="py-3 px-4 border-b border-gray-300">{member.id}</td>
                      <td className="py-3 px-4 border-b border-gray-300">{member.firstName}</td>
                      <td className="py-3 px-4 border-b border-gray-300">{member.lastName}</td>
                      <td className="py-3 px-4 border-b border-gray-300">{member.acronym}</td>
                      <td className="py-3 px-4 border-b border-gray-300">{member.association}</td>
                      <td className="py-3 px-4 border-b border-gray-300">{member.promotionYear}</td>
                      <td className="py-3 px-4 border-b border-gray-300">{member.country}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Table;
