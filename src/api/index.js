'use strict'

import { Account } from './AccountApi'
import { App } from './AppApi'
import { Apparience } from './ApparienceApi'
import { Article } from './ArticleApi'
import { Category } from './CategoryApi'
import { Chatbot } from './ChatbotApi'
import { Company } from './CompanyApi'
import { Config } from './ConfigApi'
import { ConfirmationCode } from './ConfirmationCodeApi'
import { Contract } from './ContractApi'
import { Document } from './DocumentApi'
import { Email } from './EmailApi'
import { Exchange } from './ExchangeApi'
import { Invoice } from './InvoiceApi'
import { Lead } from './LeadApi'
import { PaymentReceived } from './PaymentReceivedApi'
import { Payu } from './PayuApi'
import { Permission } from './PermissionApi'
import { Product } from './ProductApi'
import { Proposal } from './ProposalApi'
import { ProposalVersion } from './ProposalVersionApi'
import { PurchaseOrder } from './PurchaseOrderApi'
import { RecurringInvoice } from './RecurringInvoiceApi'
import { Role } from './RoleApi'
import { Service } from './ServiceApi'
import { Signature } from './SignatureApi'
import { Stripe } from './StripeApi'
import { TemplateGallery } from './TemplateGalleryApi'
import { Token } from './TokenApi'
import { UrlShort } from './UrlShortApi'
import { User } from './UserApi'
import { Department } from './DepartmentApi'
import { Template } from './TemplateApi'
import { AccessPolicy } from './AccessPolicyApi'
import { Country } from './CountryApi'
import { Currency } from './CurrencyApi'
import { TimeZone } from './TimeZoneApi'
import { Cron } from './CronApi'
import { Log } from './LogApi'
import { Activity } from './ActivityApi'
import { Tax } from './TaxApi'
import { CronPreset } from './CronPresetApi'
import { Commission } from './CommissionApi'
import { SupportCase } from './SupportCaseApi'
import { Message } from './MessageApi'
import { Conversation } from './ConversationApi'
import { PaymentMode } from './PaymentModeApi'
import { ContractType } from './ContractTypeApi'
import { Report } from './ReportApi'
import { Snippet } from './SnippetApi'

export class Apis {
  constructor (params) {
    this.account = new Account(params)
    this.app = new App(params)
    this.apparience = new Apparience(params)
    this.article = new Article(params)
    this.category = new Category(params)
    this.chatbot = new Chatbot(params)
    this.company = new Company(params)
    this.config = new Config(params)
    this.confirmationCode = new ConfirmationCode(params)
    this.contract = new Contract(params)
    this.document = new Document(params)
    this.email = new Email(params)
    this.exchange = new Exchange(params)
    this.invoice = new Invoice(params)
    this.lead = new Lead(params)
    this.paymentReceived = new PaymentReceived(params)
    this.payu = new Payu(params)
    this.permission = new Permission(params)
    this.product = new Product(params)
    this.proposal = new Proposal(params)
    this.proposalVersion = new ProposalVersion(params)
    this.purchaseOrder = new PurchaseOrder(params)
    this.recurringInvoice = new RecurringInvoice(params)
    this.role = new Role(params)
    this.service = new Service(params)
    this.signature = new Signature(params)
    this.stripe = new Stripe(params)
    this.templateGallery = new TemplateGallery(params)
    this.token = new Token(params)
    this.urlShort = new UrlShort(params)
    this.user = new User(params)
    this.department = new Department(params)
    this.template = new Template(params)
    this.accessPolicy = new AccessPolicy(params)
    this.country = new Country(params)
    this.currency = new Currency(params)
    this.timeZone = new TimeZone(params)
    this.cron = new Cron(params)
    this.log = new Log(params)
    this.activity = new Activity(params)
    this.tax = new Tax(params)
    this.cronPreset = new CronPreset(params)
    this.commission = new Commission(params)
    this.supportCase = new SupportCase(params)
    this.message = new Message(params)
    this.conversation = new Conversation(params)
    this.paymentMode = new PaymentMode(params)
    this.contractType = new ContractType(params)
    this.report = new Report(params)
    this.snippet = new Snippet(params)
  }
}
