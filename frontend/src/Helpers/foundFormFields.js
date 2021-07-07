export default [
  {
    name: 'name',
    type: 'text',
    placeholder: 'Enter a name',
    label: <strong>Name</strong>,
    validateFunc: (values, errors) => {
      if(!values.name) errors.name = 'You shoul fill this field';
      return errors;
    },
  }, 
  {
    name: 'description',
    type: 'text',
    placeholder: 'Enter a description',
    label: <strong>Description</strong>,
  }]