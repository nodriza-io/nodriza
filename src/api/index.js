'use strict'

import { App } from './AppApi'
import { Apparience } from './ApparienceApi'
import { Company } from './CompanyApi'
import { Config } from './ConfigApi'
import { Lead } from './LeadApi'
import { Role } from './RoleApi'
import { Service } from './ServiceApi'
import { Token } from './TokenApi'
import { User } from './UserApi'
import { Department } from './DepartmentApi'
import { Template } from './TemplateApi'
import { AccessPolicy } from './AccessPolicyApi'
import { Country } from './CountryApi'
import { Currency } from './CurrencyApi'
import { Activity } from './ActivityApi'

export class Apis {
  constructor (params) {
    this.app = new App(params)
    this.apparience = new Apparience(params)
    this.company = new Company(params)
    this.config = new Config(params)
    this.lead = new Lead(params)
    this.role = new Role(params)
    this.service = new Service(params)
    this.token = new Token(params)
    this.user = new User(params)
    this.department = new Department(params)
    this.template = new Template(params)
    this.accessPolicy = new AccessPolicy(params)
    this.country = new Country(params)
    this.currency = new Currency(params)
    this.activity = new Activity(params)
  }
}
