import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, CardBody, Button, Text, Flex, ButtonGroup } from "@chakra-ui/react";
import { PATHS } from "../../paths";
import { RepeatIcon } from "@chakra-ui/icons";
const Nav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Card mb={50}>
        <CardBody>
          <Flex justifyContent="space-between" alignItems="center">
            <Text color="dodgerblue" fontWeight="800" fontSize="2em">
              Money Movement Tracker
            </Text>

            <nav>
        {window.localStorage.getItem("token") ? (
          <ButtonGroup variant='outline' spacing='6'>

            <Button
              colorScheme="messenger"
              variant='solid'
              onClick={() => {
                navigate(PATHS.ADD_EXPENSE);
              }}
            >
              Add Expense
            </Button>

            <Button
              colorScheme="messenger"
              variant='solid'
              onClick={() => {
                navigate(PATHS.MANAGE_EXPENSE);
              }}
            >
              Manage Expense
            </Button>

          </ButtonGroup>
        ) : null}
      </nav>

            <Button
              colorScheme="red"
              variant='solid'
              onClick={() => {
                window.localStorage.clear();
                navigate(PATHS.LOGIN);
              }}
            >
              Logout
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </div>
  );
};

export default Nav;