import { useState } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
} from "@chakra-ui/react";

interface NewsletterProps {
  data: any;
}

function Newsletter({ data }: NewsletterProps) {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  async function onSubscribe() {
    if (email) {
      try {
        setLoading(true);
        // api call to capture email
        setLoading(false);
        toast({
          title: "Success",
          description: "You have been subscribed to our newsletter 🎉",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } catch (e) {
        setLoading(false);
        console.log(e);
      }
    }
  }

  return (
    <InputGroup w="100%" maxW="400px" size="lg">
      <Input
        placeholder="Don't miss out on our updates"
        variant="filled"
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputRightElement width="auto">
        <Button
          isLoading={loading}
          onClick={onSubscribe}
          h="100%"
          bg={data.color_scheme.primary}
          _hover={{ bg: data.color_scheme.primary }}
        >
          Subscribe
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default Newsletter;
