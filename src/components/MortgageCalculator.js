'use client'

import { useState, useEffect } from 'react';
import { Box, FormControl, FormLabel, Input, Text, Stack, Heading, Divider, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';

export default function MortgageCalculator({ initialPrice }) {
    const [loanAmount, setLoanAmount] = useState(initialPrice || 5000000);
    const [interestRate, setInterestRate] = useState(8.5);
    const [loanTerm, setLoanTerm] = useState(20);
    const [emi, setEmi] = useState(0);

    useEffect(() => {
        // EMI Calculation
        // P = Principal (Loan Amount)
        // r = Monthly Interest Rate (Annual Rate / 12 / 100)
        // n = Total Months (Years * 12)

        const P = parseFloat(loanAmount);
        const r = parseFloat(interestRate) / 12 / 100;
        const n = parseFloat(loanTerm) * 12;

        if (P > 0 && r > 0 && n > 0) {
            const emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            setEmi(Math.round(emiValue));
        } else {
            setEmi(0);
        }
    }, [loanAmount, interestRate, loanTerm]);

    return (
        <Box p={6} bg="white" boxShadow="md" borderRadius="lg" border="1px" borderColor="gray.100">
            <Heading size="md" mb={4} color="teal.600">
                Mortgage Calculator
            </Heading>
            <Divider mb={4} />

            <Stack spacing={4}>
                <FormControl>
                    <FormLabel>Loan Amount (₹)</FormLabel>
                    <Input
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                    />
                    <Slider
                        mt={2}
                        aria-label="loan-amount-slider"
                        defaultValue={loanAmount}
                        min={100000}
                        max={100000000}
                        step={100000}
                        value={loanAmount}
                        onChange={(val) => setLoanAmount(val)}
                    >
                        <SliderTrack>
                            <SliderFilledTrack bg="teal.500" />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </FormControl>

                <FormControl>
                    <FormLabel>Interest Rate (%)</FormLabel>
                    <Input
                        type="number"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                    />
                    <Slider
                        mt={2}
                        aria-label="interest-rate-slider"
                        defaultValue={interestRate}
                        min={1}
                        max={20}
                        step={0.1}
                        value={interestRate}
                        onChange={(val) => setInterestRate(val)}
                    >
                        <SliderTrack>
                            <SliderFilledTrack bg="teal.500" />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </FormControl>

                <FormControl>
                    <FormLabel>Loan Term (Years)</FormLabel>
                    <Input
                        type="number"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(e.target.value)}
                    />
                    <Slider
                        mt={2}
                        aria-label="loan-term-slider"
                        defaultValue={loanTerm}
                        min={1}
                        max={30}
                        step={1}
                        value={loanTerm}
                        onChange={(val) => setLoanTerm(val)}
                    >
                        <SliderTrack>
                            <SliderFilledTrack bg="teal.500" />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </FormControl>

                <Box bg="teal.50" p={4} borderRadius="md" textAlign="center">
                    <Text fontSize="sm" color="gray.600">Estimated Monthly Payment</Text>
                    <Heading size="lg" color="teal.600">₹{emi.toLocaleString('en-IN')}</Heading>
                </Box>
            </Stack>
        </Box>
    );
}
