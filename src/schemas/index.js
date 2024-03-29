'use strict'

import Account from './AccountSchema'
import App from './AppSchema'
import Apparience from './ApparienceSchema'
import Article from './ArticleSchema'
import Articlebot from './ArticlebotSchema'
import Category from './CategorySchema'
import Company from './CompanySchema'
import Config from './ConfigSchema'
import ConfirmationCode from './ConfirmationCodeSchema'
import Contract from './ContractSchema'
import CustomApi from './CustomApiSchema'
import Document from './DocumentSchema'
import Email from './EmailSchema'
import EventFilter from './EventFilterSchema'
import Event from './EventSchema'
import Exchange from './ExchangeSchema'
import FileData from './FileDataSchema'
import Invoice from './InvoiceSchema'
import Lead from './LeadSchema'
import Oauth2 from './Oauth2Schema'
import Observation from './ObservationSchema'
import PaymentReceived from './PaymentReceivedSchema'
import Payu from './PayuSchema'
import Permission from './PermissionSchema'
import Product from './ProductSchema'
import Proposal from './ProposalSchema'
import ProposalVersion from './ProposalVersionSchema'
import Proposalbot from './ProposalbotSchema'
import PurchaseOrder from './PurchaseOrderSchema'
import RecurringInvoice from './RecurringInvoiceSchema'
import Report from './ReportSchema'
import Reservation from './ReservationSchema'
import RoleLibrary from './RoleLibrarySchema'
import Role from './RoleSchema'
import Service from './ServiceSchema'
import Signature from './SignatureSchema'
import Snippet from './SnippetSchema'
import SpreadSheet from './SpreadSheetSchema'
import Stripe from './StripeSchema'
import TemplateGallery from './TemplateGallerySchema'
import Token from './TokenSchema'
import UrlShort from './UrlShortSchema'
import User from './UserSchema'
import Webhook from './WebhookSchema'
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
import Comment from './CommentSchema'
import ReportPeriod from './ReportPeriodSchema'
import Backup from './BackupSchema'
import Trash from './TrashSchema'
import LinkedAccount from './LinkedAccountSchema'
import Package from './PackageSchema'
import Calendar from './CalendarSchema'
import HelperBuilder from './HelperBuilderSchema'
import Provider from './ProviderSchema'
import UserActivity from './UserActivitySchema'
import Contact from './ContactSchema'
import Thing from './ThingSchema'
import ThingTrigger from './ThingTriggerSchema'

export class Schemas {
  constructor (params) {
    this.account = Account
    this.app = App
    this.apparience = Apparience
    this.article = Article
    this.articlebot = Articlebot
    this.category = Category
    this.company = Company
    this.config = Config
    this.confirmationCode = ConfirmationCode
    this.contract = Contract
    this.customApi = CustomApi
    this.document = Document
    this.email = Email
    this.eventFilter = EventFilter
    this.event = Event
    this.exchange = Exchange
    this.fileData = FileData
    this.invoice = Invoice
    this.lead = Lead
    this.oauth2 = Oauth2
    this.observation = Observation
    this.paymentReceived = PaymentReceived
    this.payu = Payu
    this.permission = Permission
    this.product = Product
    this.proposal = Proposal
    this.proposalVersion = ProposalVersion
    this.proposalbot = Proposalbot
    this.purchaseOrder = PurchaseOrder
    this.recurringInvoice = RecurringInvoice
    this.report = Report
    this.reservation = Reservation
    this.roleLibrary = RoleLibrary
    this.role = Role
    this.service = Service
    this.signature = Signature
    this.snippet = Snippet
    this.spreadSheet = SpreadSheet
    this.stripe = Stripe
    this.templateGallery = TemplateGallery
    this.token = Token
    this.urlShort = UrlShort
    this.user = User
    this.webhook = Webhook
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
    this.comment = Comment
    this.reportPeriod = ReportPeriod
    this.backup = Backup
    this.trash = Trash
    this.linkedAccount = LinkedAccount
    this.package = Package
    this.calendar = Calendar
    this.helperBuilder = HelperBuilder
    this.provider = Provider
    this.userActivity = UserActivity
    this.contact = Contact
    this.thing = Thing
    this.thingTrigger = ThingTrigger
  }
}
