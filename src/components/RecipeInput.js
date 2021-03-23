import React, {Component} from 'react';

class RecipeInput extends Component {
  static defaultProps = {
    onClose() {},
    onSave() {}
  }
  
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      instructions: "",
      ingredientes: [''],
      img: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleNewIngredient = this.handleNewIngredient.bind(this);
    this.handleChangeIng = this.handleChangeIng.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  
  handleNewIngredient(e) {
    const {ingredientes} = this.state;
    this.setState({ingredientes: [...ingredientes, '']});
  }
  
  handleChangeIng(e) {
    const index = Number(e.target.name.split('-')[1]);
    const ingredientes = this.state.ingredientes.map((ing, i) => (
      i === index ? e.target.value : ing
    ));
    this.setState({ingredientes});
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSave({...this.state});
    this.setState({
      title: '',
      instructions: '',
      ingredientes: [''],
      img: ''
    })
  }
  
  render() {
    const {title, instructions, img, ingredientes} = this.state;
    const {onClose} = this.props;
    let inputs = ingredientes.map((ing, i) => (
      <div
        className="recipe-form-line"
        key={`ingredientes-${i}`}
      >
        <label>{i+1}.
          <input
            type="text"
            name={`ingredientes-${i}`}
            value={ing}
            size={45}
            autoComplete="off"
            placeholder=" Ingredientes"
            onChange={this.handleChangeIng} />
        </label>
      </div>
    ));
    
    return (
      <div className="recipe-form-container">
        <form className='recipe-form' onSubmit={this.handleSubmit}>
          <button
            type="button"
            className="close-button"
            onClick={onClose}
          >
            X
          </button>
          <div className='recipe-form-line'>
            <label htmlFor='recipe-title-input'>Titulo</label>
            <input
              id='recipe-title-input'
              key='title'
              name='title'
              type='text'
              value={title}
              size={42}
              autoComplete="off"
              onChange={this.handleChange}/>
          </div>
          <label
            htmlFor='recipe-instructions-input'
            style={{marginTop: '5px'}}
          >
            instrucciones
          </label>
          <textarea
            key='instructions'
            id='recipe-instructions-input'
            type='Instructions'
            name='instructions'
            rows='8'
            cols='50'
            autoComplete='off'
            value={instructions}
            onChange={this.handleChange}/>
          {inputs}
          <button
            type="button"
            onClick={this.handleNewIngredient}
            className="buttons"
          >
            +
          </button>
          <div className='recipe-form-line'>
            <label htmlFor='recipe-img-input'>Image Url</label>
            <input
              id='recipe-img-input'
              type='text'
              placeholder=''
              name='img'
              value={img}
              size={36}
              autoComplete='off'
              onChange={this.handleChange} />
          </div>
          <button
            type="submit"
            className="buttons"
            style={{alignSelf: 'flex-end', marginRight: 0}}
          >
            Guardar
          </button>
        </form>
      </div>
    )
  }
}

export default RecipeInput;