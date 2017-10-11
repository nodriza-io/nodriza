'use strict'

import App from './AppSchema'
import Apparience from './ApparienceSchema'
import Company from './CompanySchema'
import Config from './ConfigSchema'
import Lead from './LeadSchema'
import Role from './RoleSchema'
import Service from './ServiceSchema'
import Token from './TokenSchema'
import User from './UserSchema'
import Department from './DepartmentSchema'
import Template from './TemplateSchema'
import AccessPolicy from './AccessPolicySchema'
import Country from './CountrySchema'
import Currency from './CurrencySchema'

export class Schemas {
  constructor (params) {
    this.app = App
    this.apparience = Apparience
    this.company = Company
    this.config = Config
    this.lead = Lead
    this.role = Role
    this.service = Service
    this.token = Token
    this.user = User
    this.department = Department
    this.template = Template
    this.accessPolicy = AccessPolicy
    this.country = Country
    this.currency = Currency
  }
}
