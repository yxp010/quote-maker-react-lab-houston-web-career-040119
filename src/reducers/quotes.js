
export default (state = [], action) => {
  let quotes = [...state]
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, {...action.quote}]
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      quotes = quotes.map(quote => {
        if (quote.id === action.quoteId) {
          quote.votes += 1
        }
        return quote
      })
      return quotes
    case 'DOWNVOTE_QUOTE':
      quotes = quotes.map(quote => {
        if (quote.id === action.quoteId && quote.votes > 0) {
          quote.votes -= 1
        }
        return quote
      })
      return quotes
    default: 
      return state
  }
}
