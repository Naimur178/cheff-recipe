import React from 'react';

const Category = () => {
    return (
        <div className='w-3/4 mx-auto mt-16'>
            <div className='text-center my-8 w-3/4 mx-auto'>
                <h2 className='pb-4 text-4xl font-bold'>Food Category</h2>
                <p>Our Chinese chefs are true masters of their craft, with a passion for creating the most delicious and authentic Chinese cuisine. Their skill and expertise are evident in every dish they prepare, and their commitment to using only the freshest and highest quality ingredients is truly impressive.</p>
            </div>
            <div>
            <div className="overflow-x-auto">
  <table className="table w-full shadow-2xl">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Description</th>
        <th>Image</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Dumplings</td>
        <td>Dumplings are a staple in Chinese cuisine and come in a variety of shapes <br /> and flavors.</td>
        <td><img src='https://img.freepik.com/free-photo/high-angle-japanese-dumplings-composition_23-2148809869.jpg?w=1060&t=st=1683220825~exp=1683221425~hmac=707e10381349bda3a43d83a12e077d08ea053560c051a4a9083af6098bd9a0f7' className='w-1/2'></img></td>
      </tr>
      {/* row 2 */}
      <tr className="">
        <th>2</th>
        <td>Noodles</td>
        <td>Chinese noodles come in various shapes and sizes and can be served <br /> in soups, stir-fries, and other dishes</td>
        <td><img src='https://img.freepik.com/free-photo/stir-fry-chicken-zucchini-sweet-peppers-green-onion-with-chopsticks_2829-10785.jpg?w=1060&t=st=1683221003~exp=1683221603~hmac=97c0747383bcbe79df17686d1ccbb6f9e6c63b79fcfed88bec45e905e4419718' className='w-1/2'></img></td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Rice dishes</td>
        <td>Rice is a staple in Chinese cuisine and is often served with meat, <br /> vegetables, or eggs</td>
        <td><img src='https://img.freepik.com/premium-photo/stir-fry-egg-noodles-with-chicken-sweet-paprika-mushrooms-chives-sesame-seeds-bowl-asian-cuisine-dish-white-table-background-top-view_630207-7790.jpg?w=1380' className='w-1/2'></img></td>
      </tr>
      <tr>
        <th>4</th>
        <td>Dim sum</td>
        <td>Dim sum is a type of Cantonese cuisine that consists of bite-sized <br /> portions of food served in small steamer baskets or on small plates</td>
        <td><img src='https://img.freepik.com/premium-photo/veg-chicken-manchurian-with-gravy-popular-food-india-served-bowl-with-chopstick_466689-34961.jpg?w=1060' className='w-1/2'></img></td>
      </tr>
      <tr>
        <th>5</th>
        <td>Hot pot</td>
        <td>Hot pot is a communal meal in which diners cook their own meat, <br /> vegetables, and noodles in a pot of boiling broth.</td>
        <td><img src='https://img.freepik.com/free-photo/beef-ball-fried-dark-wooden-surface_1150-43624.jpg?w=1060&t=st=1683221126~exp=1683221726~hmac=6d97f3f86e8d213a131b97d76219142ecf5e3b902b09bff427327c64e5a4015b' className='w-1/2'></img></td>
      </tr>
      <tr className='bg-base-200 '>
        <th>6</th>
        <td>Barbecue</td>
        <td>Chinese barbecue, also known as char siu, is a popular street food that <br /> consists of marinated meat skewered and roasted over an open flame.</td>
        <td><img src='https://img.freepik.com/premium-photo/chilli-paneer-dry-is-made-using-cottage-cheese-indo-chinese-food_466689-76969.jpg?w=1060' className='w-1/2'></img></td>
      </tr>
      <tr>
        <th>7</th>
        <td>Seafood</td>
        <td>With a long coastline, China has a rich seafood culture, and dishes such as <br /> salt and pepper squid, steamed fish, and seafood fried rice are popula</td>
        <td><img src='https://img.freepik.com/free-photo/flat-lay-noodles-with-vegetables-chicken-with-chopsticks_23-2148377427.jpg?w=1060&t=st=1683221111~exp=1683221711~hmac=e4b9bdca9fe30b1961ddded1021dc6a8cf91d0b68030b9c0c80e7f7d8365d79f' className='w-1/2'></img></td>
      </tr>
    </tbody>
  </table>
</div>
            </div>
           
        </div>
    );
};

export default Category;