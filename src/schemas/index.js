'use strict'

import App from './AppSchema'
import Apparience from './ApparienceSchema'
import Article from './ArticleSchema'
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
import Proposal from './ProposalSchema'
import PurchaseOrder from './PurchaseOrderSchema'
import RecurringInvoice from './RecurringInvoiceSchema'
import Role from './RoleSchema'
import Service from './ServiceSchema'
import Signature from './SignatureSchema'
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
import Category from './CategorySchema'
import Product from './ProductSchema'
import CronPreset from './CronPresetSchema'
import Commission from './CommissionSchema'
import SupportCase from './SupportCaseSchema'
import Message from './MessageSchema'
import FileData from './FileDataSchema'
import Conversation from './ConversationSchema'
import PaymentMode from './PaymentModeSchema'

export class Schemas {
  constructor (params) {
    this.app = App
    this.apparience = Apparience
    this.article = Article
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
    this.proposal = Proposal
    this.purchaseOrder = PurchaseOrder
    this.recurringInvoice = RecurringInvoice
    this.role = Role
    this.service = Service
    this.signature = Signature
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
    this.category = Category
    this.product = Product
    this.cronPreset = CronPreset
    this.commission = Commission
    this.supportCase = SupportCase
    this.message = Message
    this.fileData = FileData
    this.conversation = Conversation
    this.paymentMode = PaymentMode
  }
}
