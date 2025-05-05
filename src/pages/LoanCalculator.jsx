import React, { useState, useEffect } from 'react';
import {
  TextField, Button, Typography, MenuItem, Table, TableHead,
  TableBody, TableRow, TableCell, Paper, Select, FormControl, InputLabel
} from '@mui/material';
import axios from 'axios';
import { calculateEMI, generateAmortizationSchedule } from '../utils';

const CURRENCIES = ['USD', 'EUR', 'INR', 'GBP', 'JPY', 'AUD', 'CAD'];
const BASE_CURRENCY = 'USD'; // for API request

const LoanCalculator = () => {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(8.5);
  const [term, setTerm] = useState(5);
  const [emi, setEmi] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [currency, setCurrency] = useState('USD');
  const [exchangeRate, setExchangeRate] = useState(1); // default to USD

  const API_KEY = 'YOUR_API_KEY'; // Replace with your key

  const calculate = () => {
    const emiVal = calculateEMI(amount, rate, term);
    const amortization = generateAmortizationSchedule(amount, rate, term);
    setEmi(emiVal);
    setSchedule(amortization);
  };

  const fetchExchangeRate = async (targetCurrency) => {
    try {
      const res = await axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${BASE_CURRENCY}`);
      const rate = res.data.conversion_rates[targetCurrency];
      setExchangeRate(rate || 1);
    } catch (error) {
      console.error("Failed to fetch exchange rate:", error);
      setExchangeRate(1);
    }
  };

  useEffect(() => {
    fetchExchangeRate(currency);
  }, [currency]);

  return (
    <div style={{ padding: 20, maxWidth: 1000, margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>Loan Calculator Dashboard</Typography>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 16 }}>
        <TextField label="Loan Amount" type="number" value={amount} onChange={(e) => setAmount(+e.target.value)} />
        <TextField label="Interest Rate (%)" type="number" value={rate} onChange={(e) => setRate(+e.target.value)} />
        <TextField label="Term (Years)" type="number" value={term} onChange={(e) => setTerm(+e.target.value)} />
        <Button variant="contained" onClick={calculate}>Calculate</Button>
        <FormControl style={{minWidth: 120}}>
        <InputLabel>Currency</InputLabel>
          <Select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            {CURRENCIES.map((curr) => (
              <MenuItem key={curr} value={curr}>{curr}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {emi && (
        <Typography variant="h6">
          Monthly EMI: {currency} {(emi * exchangeRate).toFixed(2)}
        </Typography>
      )}

      {schedule.length > 0 && (
        <Paper sx={{ mt: 4, overflow: 'auto' }}>
          <Typography variant="h6" sx={{ p: 2 }}>
            Amortization Schedule ({currency})
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Month</TableCell>
                <TableCell>Principal</TableCell>
                <TableCell>Interest</TableCell>
                <TableCell>Remaining Balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {schedule.map((row) => (
                <TableRow key={row.month}>
                  <TableCell>{row.month}</TableCell>
                  <TableCell>{currency} {(row.principal * exchangeRate).toFixed(2)}</TableCell>
                  <TableCell>{currency} {(row.interest * exchangeRate).toFixed(2)}</TableCell>
                  <TableCell>{currency} {(row.balance * exchangeRate).toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </div>
  );
};

export default LoanCalculator;
