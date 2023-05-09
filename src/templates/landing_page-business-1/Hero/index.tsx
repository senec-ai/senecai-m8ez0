import Head from "next/head";
import { Heading, Container, Text, Stack } from "@chakra-ui/react";
import Newsletter from "../../../features/Newsletter";

export default function BusinessHero({ data }: { data: any }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container maxW={"3xl"}>
        <Stack
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            id="copy.hero.header"
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            {data.copy.hero.header}
          </Heading>
          <Text color={"gray.500"} id="copy.hero.subheader">
            {data.copy.hero.subheader}
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
            w="100%"
          >
            <Newsletter data={data} />
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
