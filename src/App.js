import './App.css';
import { fetchData } from './services/api';
import { useState, useEffect } from 'react';
import TableView from './components/TableView';
import CardView from "./components/CardView";
import ToggleView from './components/ToggleView';
import { Typography } from '@mui/material';
import './index.css'; // Import custom styles for the root element or container



function App() {
  // const [tableData, setTableData] = useState({})
  // const [loading, setLoading] = useState(true)
  const [tableProps, setTableProps] = useState([
    { "name": "Bluetooth", "category": "Electronic", "value": "$150", "quantity": 5, "price": "$30", "disabled": false },
    { "name": "Edifier M43560", "category": "Electronic", "value": "0", "quantity": 0, "price": "$0", "disabled": false },
    { "name": "Sony 4k ultra 55 inch TV", "category": "Electronic", "value": "$1190", "quantity": 17, "price": "$70", "disabled": false },
    { "name": "Samsung 55 inch TV", "category": "Electronic", "value": "$600", "quantity": 50, "price": "$12", "disabled": false },
    { "name": "Samsung S34 Ultra", "category": "phone", "value": "$0", "quantity": 0, "price": "$0", "disabled": false }
  ]);


  const [widgetValues, setWidgetValues] = useState({
    totalProducts: 0,
    totalStoreValue: 0,
    outOfStockCount: 0,
    uniqueCategories: 0
  });

  const [isAdmin, setIsAdmin] = useState(true);

  const toggleUserRole = () => {
    setIsAdmin(prevState => !prevState);
  };

  const handleLogout = () => {
    // Implement logout functionality here
    console.log('User logged out');
  };

  useEffect(() => {
    updateWidgets();
  }, [tableProps]);

  const updateWidgets = () => {
    // Total number of products (excluding disabled items)
    const totalProducts = tableProps.filter(product => !product.disabled).length;

    // Total store value (excluding disabled items)
    const totalStoreValue = tableProps.reduce((total, product) => {
      if (!product.disabled) {
        return total + parseFloat(product.value.replace('$', ''));
      }
      return total;
    }, 0);

    // Count of out of stock products (excluding disabled items)
    const outOfStockCount = tableProps.filter(product => !product.disabled && product.quantity === 0).length;

    // Number of unique categories (excluding disabled items)
    const uniqueCategories = new Set(tableProps.filter(product => !product.disabled).map(product => product.category)).size;


    setWidgetValues({ totalProducts, totalStoreValue, outOfStockCount, uniqueCategories });
  };

  // useEffect(() => {
  //   const fetchTableData = async () => {
  //     try {
  //       const result = await fetchData();
  //       setTableData(result)
  //     } catch (error) {
  //       console.log('Error fetching TableData', error)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  //   fetchTableData()

  // }, [])

  // locally maitaining table



  const handleEdit = (editedItem) => {
    const updatedProps = tableProps.map(item => (item.name === editedItem.name ? editedItem : item));
    setTableProps(updatedProps);
  };

  const handleDelete = (deletedItem) => {
    const updatedProps = tableProps.filter(item => item.name !== deletedItem.name);
    setTableProps(updatedProps);
  };

  const handleDisable = (disabledItem) => {
    const updatedProps = tableProps.map(item => (item.name === disabledItem.name ? { ...item, disabled: !item.disabled } : item));
    setTableProps(updatedProps);
  };


  return (
    <div className='App-container'>
      <ToggleView isAdmin={isAdmin} onToggle={toggleUserRole} onLogout={handleLogout} />

      <Typography variant="h3" component="h2" style={{ color: "white", padding: "20px 0px 0px 20px", }}> Inventory Stats </Typography>
      <CardView
        totalProducts={widgetValues.totalProducts}
        totalStoreValue={widgetValues.totalStoreValue}
        outOfStockCount={widgetValues.outOfStockCount}
        uniqueCategories={widgetValues.uniqueCategories} />
      <TableView isAdmin={isAdmin} tableProps={tableProps} onEdit={handleEdit} onDelete={handleDelete} onDisable={handleDisable} />
    </div>
  );
}

export default App;
