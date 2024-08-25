import mongoose from "mongoose";

const InvestmentOpportunitySchema = new mongoose.Schema({
  tag: { 
    type: String, 
    required: true
    },
  cardImage: { 
    type: String, 
    required: true 
    },
  title: {
    type: String, 
    required: true 
    },
  location: { 
    type: String, 
    required: true 
    },
  description: {
    type: String, 
    required: true 
    },
  totalPrice: {
    type: Number, 
    required: true 
    },
  getPrice: { 
    type: Number, 
    required: true 
    },
  securityType: { 
    type: String, 
    required: true 
    },
  investmentMultiple: { 
    type: Number, 
    required: true 
    },
  maturity: { 
    type: Number, 
    required: true 
    },
  minInvestment: { 
    type: Number, 
    required: true 
    },
})

const Card = mongoose.models.investmentOpportunityCard  || mongoose.model("investmentOpportunityCard", InvestmentOpportunitySchema); 

export default Card;