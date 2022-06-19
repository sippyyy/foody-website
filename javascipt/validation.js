
function Validator (options){
    formElement=document.querySelector(options.form)

    let selectorRules={}

    const validate = (inputElement,rule)=>{
        const rules = selectorRules[rule.selector]
        const errorElement = inputElement.closest(options.formGroupSelect).querySelector(options.errorSelector)
        let errorMessage

        for(let i = 0 ; i< rules.length; i++){
            errorMessage = rules[i](inputElement.value)
            if(errorMessage) break;
        }
        if(errorMessage){
            errorElement.innerText = errorMessage
            inputElement.classList.add('active')
        }else{
            errorElement.innerText =''
            inputElement.classList.remove('active')
        }

        return !errorMessage
    }
    if(formElement){

        formElement.onsubmit = function(e){
            e.preventDefault()

            let formIsValid =true

            options.rules.forEach(rule=>{
                const inputElement = formElement.querySelector(rule.selector)
                const formValid = validate(inputElement,rule)

                if(!formValid){
                    formIsValid = false
                }

            })
            if(formIsValid){
                let data = {}
                const inputs = formElement.querySelectorAll(options.input)
                if(typeof options.onSubmit === 'function'){
                    Array.from(inputs).map(input=>{
                        return data[input.id] = input.value
                    })
                }
                options.onSubmit(data)
            }
    

        }

        options.rules.forEach(rule=>{
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test)
            }else{
                selectorRules[rule.selector] = [rule.test]
            }
            
            const inputElement = formElement.querySelector(rule.selector)
            const errorElement = inputElement.closest(options.formGroupSelect).querySelector(options.errorSelector)
            if(inputElement){
                inputElement.onblur=function(){
                    validate(inputElement,rule)
                }
                inputElement.oninput=function(){
                    errorElement.innerText=''
                    inputElement.classList.remove('active')

                }
                
            }
        })
    }
}

Validator.isRequired=(selector)=>{
    return{
        selector,
        test: (value)=>{
            return value ? undefined : 'Please fill this form'
        }
    }
}

Validator.isEmail=(selector)=>{
    return{
        selector,
        test: (value)=>{
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'Please fill a valid email'
        }
    }
}

Validator.isNumber = (selector)=>{
    return{
        selector,
        test:(value)=>{
            const regex = /^[0-9]*$/
             return regex.test(value) ? undefined : 'This form must be number type'
        }
    }
}

Validator.isLengthRequired = (selector,length) =>{
    return{
        selector,
        test: (value) =>{
            return value.length >= length ? undefined : `This form must longer than ${length} letters`
        }
    }
}