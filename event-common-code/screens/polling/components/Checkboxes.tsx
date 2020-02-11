import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: #e4e4e4;
  justify-content: center;
`;

const CheckedCircle = Styled.View`
  height: 15px;
  width: 15px;
  border-radius: 12.5px;
  background-color: #0d2a43;
  align-self: center;
`;

function CheckboxesComponent() {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => setChecked(!checked);

  return (
    <Container onPress={toggleChecked}>
      {checked && <CheckedCircle />}
    </Container>
  );
}

export default CheckboxesComponent;
