import React, { useState } from "react";
import { InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { BiSearchAlt } from "react-icons/bi";
import style from "./search.module.css";

export const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchTag, setSearchTag] = useState("product");
  return (
    <>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<BiSearchAlt style={{ color: "#718096" }} />}
        />
        <Input placeholder="Search anything..." onClick={onOpen} />
      </InputGroup>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalBody>
            <Flex gap={1} marginBottom={2}>
              <Tag
                variant={searchTag === "product" ? "solid" : "subtle"}
                colorScheme="blackAlpha"
                onClick={() => setSearchTag("product")}
                style={{ cursor: "pointer" }}
              >
                Product
              </Tag>
              <Tag
                variant={searchTag === "promotion" ? "solid" : "subtle"}
                colorScheme="blackAlpha"
                onClick={() => setSearchTag("promotion")}
                style={{ cursor: "pointer" }}
              >
                Promotion
              </Tag>
              <Tag
                variant={searchTag === "user" ? "solid" : "subtle"}
                colorScheme="blackAlpha"
                onClick={() => setSearchTag("user")}
                style={{ cursor: "pointer" }}
              >
                User
              </Tag>
            </Flex>
            <Flex gap={2}>
              <Input variant="unstyled" />
              <Button variant="outline" colorScheme="blue">
                Search
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
