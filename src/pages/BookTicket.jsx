import { useState } from "react";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Button, useToast, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react";

const BookTicket = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numTickets, setNumTickets] = useState(1);
  const [paymentInfo, setPaymentInfo] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send the data to a server
    toast({
      title: "Booking Confirmed.",
      description: "Your tickets have been successfully booked.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Clear the form
    setName("");
    setEmail("");
    setNumTickets(1);
    setPaymentInfo("");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} width="100%">
        <Heading as="h1" size="xl" textAlign="center">
          Book Your Tickets
        </Heading>
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="num-tickets" isRequired>
              <FormLabel>Number of Tickets</FormLabel>
              <NumberInput
                min={1}
                value={numTickets}
                onChange={(value) => setNumTickets(value)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl id="payment-info" isRequired>
              <FormLabel>Payment Information</FormLabel>
              <Input
                type="text"
                value={paymentInfo}
                onChange={(e) => setPaymentInfo(e.target.value)}
              />
            </FormControl>
            <Button colorScheme="teal" size="lg" type="submit">
              Confirm Booking
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default BookTicket;