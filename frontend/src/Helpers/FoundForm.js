import foundFormFields from './foundFormFields'
import {CrudFull} from 'sm-react-crud'

const FoundForm = <CrudFull
    crudRead={'https://api/object/list'}
    crudCreate={'https://api/object/create'}
    modelName={'objectsName'}
    createDisabled={false}
    createButtonTitle={"New object"}
    createFormOptions={{
        fields: foundFormFields,
        title: 'Create new',
        editTitle: 'Edit object',
    }}
    submitShape={form => ({
        name: form.name.toUpperCase(), 
        description: form.description.toLowerCase()
    })}
    updateShape={record => ({
        name: record.name, 
        description: record.description.toLowerCase()
    })}
    customActionsFunc={(action, object) => {
        switch(action.id) {
            case 'took':
                //some action
                break;
            case 'return':
                //some action
                break;
            default:
                return null;
        }
    }}
/>

export default FoundForm;