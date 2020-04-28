import React, { useState } from 'react';
import {
  Button,
  FormControl,
  Row,
  Col,
  InputGroup,
  Container,
} from 'react-bootstrap';
import ItemList from './itemlist';

function ArrayHookApp() {
  // Define the array and the function to update the array
  const [list, setList] = useState([]);
  // Define the variable to hold the input from the textfield and the function to update that value
  const [currentValue, setValue] = useState();

  // Update the array on button click
  const onAddListClick = () => {
    if (currentValue !== undefined) {
      setList((oldList) => [...oldList, currentValue]);
      setValue();
      document.getElementById('entry-field').value = '';
    }
  };

  return (
    <div style={{ marginTop: '5%' }}>
      <Container>
        <Row className='justify-content-md-center'>
          <Col lg={4}>
            <Row className='justify-content-md-center'>
              <h4>ArrayHookApp</h4>
            </Row>
            <InputGroup>
              <FormControl
                id='entry-field'
                style={{
                  border: '1px solid #6F7269',
                  borderTopLeftRadius: '8px',
                  borderBottomLeftRadius: '8px',
                  backgroundColor: '#6F7269',
                  color: '#ecf2f2',
                }}
                type='text'
                placeholder='Type something...'
                onChange={(event) => setValue(event.target.value)}
              ></FormControl>
              <InputGroup.Append>
                <Button
                  style={{
                    borderTopRightRadius: '8px',
                    borderBottomRightRadius: '8px',
                  }}
                  variant='dark'
                  onClick={onAddListClick}
                >
                  Add
                </Button>
              </InputGroup.Append>
            </InputGroup>
            <ItemList items={list} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ArrayHookApp;
