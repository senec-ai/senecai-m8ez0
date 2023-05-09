import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
} from "react-icons/io5";
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg?: string;
  icon?: ReactElement;
  index: number;
}

const Feature = ({ text, icon, iconBg, index }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function BusinessFeatures({ data }: { data: any }) {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Story
          </Text>
          <Heading>{data.copy.features.title}</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            {data.copy.features.description}
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            {data.copy.features.feature_items.map((feature: any, i: number) => (
              <Feature
                key={i}
                index={i}
                icon={
                  <Icon as={IoAnalyticsSharp} color={"green.500"} w={5} h={5} />
                }
                // iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={feature.title}
              />
            ))}
          </Stack>
        </Stack>
        <Flex minH="40vh">
          <Flex
            flexFlow="column"
            justifyContent="center"
            alignItems="center"
            w="100%"
            h="100%"
            backgroundImage={`url('${data.images.features_prompt}')`}
            backgroundSize={"cover"}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            rounded="md"
            objectFit="cover"
          ></Flex>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
