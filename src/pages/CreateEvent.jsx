import { useState } from "react";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Textarea, Button, useToast } from "@chakra-ui/react";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send the data to a server
    toast({
      title: "Event Created.",
      description: "Your event has been successfully created.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Clear the form
    setEventName("");
    setEventDate("");
    setEventLocation("");
    setEventDescription("");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} width="100%">
        <Heading as="h1" size="xl" textAlign="center">
          Create New Event
        </Heading>
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="event-name" isRequired>
              <FormLabel>Event Name</FormLabel>
              <Input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
              />
            </FormControl>
            <FormControl id="event-date" isRequired>
              <FormLabel>Event Date</FormLabel>
              <Input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
              />
            </FormControl>
            <FormControl id="event-location" isRequired>
              <FormLabel>Event Location</FormLabel>
              <Input
                type="text"
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
              />
            </FormControl>
            <FormControl id="event-description">
              <FormLabel>Event Description</FormLabel>
              <Textarea
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
              />
            </FormControl>
            <Button colorScheme="teal" size="lg" type="submit">
              Create Event
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default CreateEvent;