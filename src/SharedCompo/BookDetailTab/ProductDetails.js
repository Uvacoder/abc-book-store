import React from "react";

const ProductDetails = () => {
  return (
    <div>
      <h2 className="text-3xl text-center py-5">Product Details</h2>
      <table className="w-auto ">
        <tbody>
          <tr>
            <th className="text-start font-normal py-2 px-4">ISBN-13:</th>
            <td className="px-4 py-2">9780525536963</td>
          </tr>
          <tr>
            <th className="text-start font-normal py-2 px-4">Publisher:</th>
            <td className=" py-2 px-4">
              <span className="hover:underline text-[#347d56] cursor-pointer">
                Penguin Publishing Group
              </span>
            </td>
          </tr>
          <tr>
            {" "}
            <th className="text-start font-normal py-2 px-4">
              Publication date:
            </th>
            <td className="px-4 py-2">02/01/2022</td>
          </tr>
          <tr>
            {" "}
            <th className="text-start font-normal py-2 px-4">Pages:</th>
            <td className="px-4 py-2">400</td>
          </tr>
          <tr>
            <th className="text-start font-normal py-2 px-4">Sales rank:</th>
            <td className="px-4 py-2">2,290</td>
          </tr>
          <tr>
            <th className="text-start font-normal py-2 px-4">
              Product dimensions:
            </th>
            <td className="px-4 py-2"> 5.10(w) x 7.60(h) x 1.20(d)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetails;
