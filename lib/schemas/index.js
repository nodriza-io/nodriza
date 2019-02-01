'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Schemas = undefined;

var _AccountSchema = require('./AccountSchema');

var _AccountSchema2 = _interopRequireDefault(_AccountSchema);

var _AppSchema = require('./AppSchema');

var _AppSchema2 = _interopRequireDefault(_AppSchema);

var _ApparienceSchema = require('./ApparienceSchema');

var _ApparienceSchema2 = _interopRequireDefault(_ApparienceSchema);

var _ArticleSchema = require('./ArticleSchema');

var _ArticleSchema2 = _interopRequireDefault(_ArticleSchema);

var _CategorySchema = require('./CategorySchema');

var _CategorySchema2 = _interopRequireDefault(_CategorySchema);

var _ChatbotSchema = require('./ChatbotSchema');

var _ChatbotSchema2 = _interopRequireDefault(_ChatbotSchema);

var _CompanySchema = require('./CompanySchema');

var _CompanySchema2 = _interopRequireDefault(_CompanySchema);

var _ConfigSchema = require('./ConfigSchema');

var _ConfigSchema2 = _interopRequireDefault(_ConfigSchema);

var _ConfirmationCodeSchema = require('./ConfirmationCodeSchema');

var _ConfirmationCodeSchema2 = _interopRequireDefault(_ConfirmationCodeSchema);

var _ContractSchema = require('./ContractSchema');

var _ContractSchema2 = _interopRequireDefault(_ContractSchema);

var _DocumentSchema = require('./DocumentSchema');

var _DocumentSchema2 = _interopRequireDefault(_DocumentSchema);

var _EmailSchema = require('./EmailSchema');

var _EmailSchema2 = _interopRequireDefault(_EmailSchema);

var _ExchangeSchema = require('./ExchangeSchema');

var _ExchangeSchema2 = _interopRequireDefault(_ExchangeSchema);

var _InvoiceSchema = require('./InvoiceSchema');

var _InvoiceSchema2 = _interopRequireDefault(_InvoiceSchema);

var _LeadSchema = require('./LeadSchema');

var _LeadSchema2 = _interopRequireDefault(_LeadSchema);

var _PaymentReceivedSchema = require('./PaymentReceivedSchema');

var _PaymentReceivedSchema2 = _interopRequireDefault(_PaymentReceivedSchema);

var _PayuSchema = require('./PayuSchema');

var _PayuSchema2 = _interopRequireDefault(_PayuSchema);

var _PermissionSchema = require('./PermissionSchema');

var _PermissionSchema2 = _interopRequireDefault(_PermissionSchema);

var _ProductSchema = require('./ProductSchema');

var _ProductSchema2 = _interopRequireDefault(_ProductSchema);

var _ProposalSchema = require('./ProposalSchema');

var _ProposalSchema2 = _interopRequireDefault(_ProposalSchema);

var _ProposalVersionSchema = require('./ProposalVersionSchema');

var _ProposalVersionSchema2 = _interopRequireDefault(_ProposalVersionSchema);

var _PurchaseOrderSchema = require('./PurchaseOrderSchema');

var _PurchaseOrderSchema2 = _interopRequireDefault(_PurchaseOrderSchema);

var _RecurringInvoiceSchema = require('./RecurringInvoiceSchema');

var _RecurringInvoiceSchema2 = _interopRequireDefault(_RecurringInvoiceSchema);

var _RoleLibrarySchema = require('./RoleLibrarySchema');

var _RoleLibrarySchema2 = _interopRequireDefault(_RoleLibrarySchema);

var _RoleSchema = require('./RoleSchema');

var _RoleSchema2 = _interopRequireDefault(_RoleSchema);

var _ServiceSchema = require('./ServiceSchema');

var _ServiceSchema2 = _interopRequireDefault(_ServiceSchema);

var _SignatureSchema = require('./SignatureSchema');

var _SignatureSchema2 = _interopRequireDefault(_SignatureSchema);

var _SnippetSchema = require('./SnippetSchema');

var _SnippetSchema2 = _interopRequireDefault(_SnippetSchema);

var _StripeSchema = require('./StripeSchema');

var _StripeSchema2 = _interopRequireDefault(_StripeSchema);

var _TemplateGallerySchema = require('./TemplateGallerySchema');

var _TemplateGallerySchema2 = _interopRequireDefault(_TemplateGallerySchema);

var _TokenSchema = require('./TokenSchema');

var _TokenSchema2 = _interopRequireDefault(_TokenSchema);

var _UrlShortSchema = require('./UrlShortSchema');

var _UrlShortSchema2 = _interopRequireDefault(_UrlShortSchema);

var _UserSchema = require('./UserSchema');

var _UserSchema2 = _interopRequireDefault(_UserSchema);

var _DepartmentSchema = require('./DepartmentSchema');

var _DepartmentSchema2 = _interopRequireDefault(_DepartmentSchema);

var _TemplateSchema = require('./TemplateSchema');

var _TemplateSchema2 = _interopRequireDefault(_TemplateSchema);

var _AccessPolicySchema = require('./AccessPolicySchema');

var _AccessPolicySchema2 = _interopRequireDefault(_AccessPolicySchema);

var _CountrySchema = require('./CountrySchema');

var _CountrySchema2 = _interopRequireDefault(_CountrySchema);

var _CurrencySchema = require('./CurrencySchema');

var _CurrencySchema2 = _interopRequireDefault(_CurrencySchema);

var _TimeZoneSchema = require('./TimeZoneSchema');

var _TimeZoneSchema2 = _interopRequireDefault(_TimeZoneSchema);

var _CronSchema = require('./CronSchema');

var _CronSchema2 = _interopRequireDefault(_CronSchema);

var _LogSchema = require('./LogSchema');

var _LogSchema2 = _interopRequireDefault(_LogSchema);

var _ActivitySchema = require('./ActivitySchema');

var _ActivitySchema2 = _interopRequireDefault(_ActivitySchema);

var _TaxSchema = require('./TaxSchema');

var _TaxSchema2 = _interopRequireDefault(_TaxSchema);

var _CronPresetSchema = require('./CronPresetSchema');

var _CronPresetSchema2 = _interopRequireDefault(_CronPresetSchema);

var _CommissionSchema = require('./CommissionSchema');

var _CommissionSchema2 = _interopRequireDefault(_CommissionSchema);

var _SupportCaseSchema = require('./SupportCaseSchema');

var _SupportCaseSchema2 = _interopRequireDefault(_SupportCaseSchema);

var _MessageSchema = require('./MessageSchema');

var _MessageSchema2 = _interopRequireDefault(_MessageSchema);

var _ConversationSchema = require('./ConversationSchema');

var _ConversationSchema2 = _interopRequireDefault(_ConversationSchema);

var _PaymentModeSchema = require('./PaymentModeSchema');

var _PaymentModeSchema2 = _interopRequireDefault(_PaymentModeSchema);

var _ContractTypeSchema = require('./ContractTypeSchema');

var _ContractTypeSchema2 = _interopRequireDefault(_ContractTypeSchema);

var _ReportSchema = require('./ReportSchema');

var _ReportSchema2 = _interopRequireDefault(_ReportSchema);

var _FileDataSchema = require('./FileDataSchema');

var _FileDataSchema2 = _interopRequireDefault(_FileDataSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Schemas = exports.Schemas = function Schemas(params) {
  _classCallCheck(this, Schemas);

  this.account = _AccountSchema2.default;
  this.app = _AppSchema2.default;
  this.apparience = _ApparienceSchema2.default;
  this.article = _ArticleSchema2.default;
  this.category = _CategorySchema2.default;
  this.chatbot = _ChatbotSchema2.default;
  this.company = _CompanySchema2.default;
  this.config = _ConfigSchema2.default;
  this.confirmationCode = _ConfirmationCodeSchema2.default;
  this.contract = _ContractSchema2.default;
  this.document = _DocumentSchema2.default;
  this.email = _EmailSchema2.default;
  this.exchange = _ExchangeSchema2.default;
  this.invoice = _InvoiceSchema2.default;
  this.lead = _LeadSchema2.default;
  this.paymentReceived = _PaymentReceivedSchema2.default;
  this.payu = _PayuSchema2.default;
  this.permission = _PermissionSchema2.default;
  this.product = _ProductSchema2.default;
  this.proposal = _ProposalSchema2.default;
  this.proposalVersion = _ProposalVersionSchema2.default;
  this.purchaseOrder = _PurchaseOrderSchema2.default;
  this.recurringInvoice = _RecurringInvoiceSchema2.default;
  this.roleLibrary = _RoleLibrarySchema2.default;
  this.role = _RoleSchema2.default;
  this.service = _ServiceSchema2.default;
  this.signature = _SignatureSchema2.default;
  this.snippet = _SnippetSchema2.default;
  this.stripe = _StripeSchema2.default;
  this.templateGallery = _TemplateGallerySchema2.default;
  this.token = _TokenSchema2.default;
  this.urlShort = _UrlShortSchema2.default;
  this.user = _UserSchema2.default;
  this.department = _DepartmentSchema2.default;
  this.template = _TemplateSchema2.default;
  this.accessPolicy = _AccessPolicySchema2.default;
  this.country = _CountrySchema2.default;
  this.currency = _CurrencySchema2.default;
  this.timeZone = _TimeZoneSchema2.default;
  this.cron = _CronSchema2.default;
  this.log = _LogSchema2.default;
  this.activity = _ActivitySchema2.default;
  this.tax = _TaxSchema2.default;
  this.cronPreset = _CronPresetSchema2.default;
  this.commission = _CommissionSchema2.default;
  this.supportCase = _SupportCaseSchema2.default;
  this.message = _MessageSchema2.default;
  this.conversation = _ConversationSchema2.default;
  this.paymentMode = _PaymentModeSchema2.default;
  this.contractType = _ContractTypeSchema2.default;
  this.report = _ReportSchema2.default;
  this.fileData = _FileDataSchema2.default;
};