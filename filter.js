let messages = [
    {
        message: 'Esse id amet quis eu esse aute officia ipsum.',
    }
]

function getShortMessages (messages) {
   
    return messages.map(msg => msg.message).filter(word => word.length < 50)
    
} 
module.exports = getShortMessages
