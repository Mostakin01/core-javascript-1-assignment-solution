let paymentmethod='debit'

switch(paymentmethod){
    case'credit':
    console.log('processing fee for credit payment is 2%')
    break
    case'debit':
    console.log('processing fee for debit payment is 1.5%')
    break
    case'paypal':
    console.log('processing fee for paypal is 3%')
    break
    default:
        console.log('invalid credentials')
}