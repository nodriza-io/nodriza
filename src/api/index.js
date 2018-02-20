'use strict'

import { App } from './AppApi'
import { Apparience } from './ApparienceApi'
import { Article } from './ArticleApi'
import { Company } from './CompanyApi'
import { Config } from './ConfigApi'
import { Contract } from './ContractApi'
import { Document } from './DocumentApi'
import { Email } from './EmailApi'
import { Exchange } from './ExchangeApi'
import { Invoice } from './InvoiceApi'
import { Lead } from './LeadApi'
import { PaymentReceived } from './PaymentReceivedApi'
import { Payu } from './PayuApi'
import { Permission } from './PermissionApi'
import { Proposal } from './ProposalApi'
import { PurchaseOrder } from './PurchaseOrderApi'
import { RecurringInvoice } from './RecurringInvoiceApi'
import { Role } from './RoleApi'
import { Service } from './ServiceApi'
import { Signature } from './SignatureApi'
import { TemplateGallery } from './TemplateGalleryApi'
import { Token } from './TokenApi'
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
import { Category } from './CategoryApi'
import { Product } from './ProductApi'
import { CronPreset } from './CronPresetApi'
import { Commission } from './CommissionApi'
import { SupportCase } from './SupportCaseApi'
import { Message } from './MessageApi'
import { Conversation } from './ConversationApi'
import { PaymentMode } from './PaymentModeApi'

export class Apis {
  constructor (params) {
    this.app = new App(params)
    this.apparience = new Apparience(params)
    this.article = new Article(params)
    this.company = new Company(params)
    this.config = new Config(params)
    this.contract = new Contract(params)
    this.document = new Document(params)
    this.email = new Email(params)
    this.exchange = new Exchange(params)
    this.invoice = new Invoice(params)
    this.lead = new Lead(params)
    this.paymentReceived = new PaymentReceived(params)
    this.payu = new Payu(params)
    this.permission = new Permission(params)
    this.proposal = new Proposal(params)
    this.purchaseOrder = new PurchaseOrder(params)
    this.recurringInvoice = new RecurringInvoice(params)
    this.role = new Role(params)
    this.service = new Service(params)
    this.signature = new Signature(params)
    this.templateGallery = new TemplateGallery(params)
    this.token = new Token(params)
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
    this.category = new Category(params)
    this.product = new Product(params)
    this.cronPreset = new CronPreset(params)
    this.commission = new Commission(params)
    this.supportCase = new SupportCase(params)
    this.message = new Message(params)
    this.conversation = new Conversation(params)
    this.paymentMode = new PaymentMode(params)
  }
}
