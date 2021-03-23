import React, {Component} from 'react';
import { 
  Container,
  FormControl,
  InputLabel,
  Input,
  FormHelperText, 
  TextField} from '@material-ui/core';

class FormInput extends Component {
  static defaultProps = {
    onClose() {},
    onSave() {}
  }

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtittle: '',
      text: '',
      img: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSave({...this.state});
    this.setState({
      title: '',
      subtittle: '',
      text: '',
      img: ''
    })
  }

  render (){
    const { title, subtittle, text, img } = this.state;
    const { onClose } = this.props;

    return (
      <Container style={{ width: '50em', height: '30em', backgroundColor:'#ffffff' }}>
        <FormControl>
          <InputLabel htmlFor="img">
            <TextField id="img" autoComplete="off" label="Cargar Imagen" variant="outlined">Papi</TextField>
            <FormHelperText id="helpImg">sirve para subir imagenes</FormHelperText>
          </InputLabel>
        </FormControl>
      </Container>
    )
  }
}

export default FormInput;