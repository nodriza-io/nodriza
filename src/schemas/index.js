'use strict'

import Account from './AccountSchema'
import App from './AppSchema'
import Apparience from './ApparienceSchema'
import Article from './ArticleSchema'
import Category from './CategorySchema'
import Company from './CompanySchema'
import Config from './ConfigSchema'
import Contract from './ContractSchema'
import Document from './DocumentSchema'
import Email from './EmailSchema'
import Exchange from './ExchangeSchema'
import Invoice from './InvoiceSchema'
import Lead from './LeadSchema'
import PaymentReceived from './PaymentReceivedSchema'
import Payu from './PayuSchema'
import Permission from './PermissionSchema'
import Product from './ProductSchema'
import Proposal from './ProposalSchema'
import ProposalVersion from './ProposalVersionSchema'
import PurchaseOrder from './PurchaseOrderSchema'
import RecurringInvoice from './RecurringInvoiceSchema'
import Role from './RoleSchema'
import Service from './ServiceSchema'
import Signature from './SignatureSchema'
import Stripe from './StripeSchema'
import TemplateGallery from './TemplateGallerySchema'
import Token from './TokenSchema'
import User from './UserSchema'
import Department from './DepartmentSchema'
import Template from './TemplateSchema'
import AccessPolicy from './AccessPolicySchema'
import Country from './CountrySchema'
import Currency from './CurrencySchema'
import TimeZone from './TimeZoneSchema'
import Cron from './CronSchema'
import Log from './LogSchema'
import Activity from './ActivitySchema'
import Tax from './TaxSchema'
import CronPreset from './CronPresetSchema'
import Commission from './CommissionSchema'
import SupportCase from './SupportCaseSchema'
import Message from './MessageSchema'
import Conversation from './ConversationSchema'
import PaymentMode from './PaymentModeSchema'
import ContractType from './ContractTypeSchema'

export class Schemas {
  constructor (params) {
    this.account = Account
    this.app = App
    this.apparience = Apparience
    this.article = Article
    this.category = Category
    this.company = Company
    this.config = Config
    this.contract = Contract
    this.document = Document
    this.email = Email
    this.exchange = Exchange
    this.invoice = Invoice
    this.lead = Lead
    this.paymentReceived = PaymentReceived
    this.payu = Payu
    this.permission = Permission
    this.product = Product
    this.proposal = Proposal
    this.proposalVersion = ProposalVersion
    this.purchaseOrder = PurchaseOrder
    this.recurringInvoice = RecurringInvoice
    this.role = Role
    this.service = Service
    this.signature = Signature
    this.stripe = Stripe
    this.templateGallery = TemplateGallery
    this.token = Token
    this.user = User
    this.department = Department
    this.template = Template
    this.accessPolicy = AccessPolicy
    this.country = Country
    this.currency = Currency
    this.timeZone = TimeZone
    this.cron = Cron
    this.log = Log
    this.activity = Activity
    this.tax = Tax
    this.cronPreset = CronPreset
    this.commission = Commission
    this.supportCase = SupportCase
    this.message = Message
    this.conversation = Conversation
    this.paymentMode = PaymentMode
    this.contractType = ContractType
  }
}
