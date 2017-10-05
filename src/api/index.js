'use strict'

import { App } from './AppApi'
import { Apparience } from './ApparienceApi'
import { Company } from './CompanyApi'
import { Config } from './ConfigApi'
import { Role } from './RoleApi'
import { Service } from './ServiceApi'
import { User } from './UserApi'
import { Template } from './TemplateApi'
import { AccessPolicy } from './AccessPolicyApi'
import { Token } from './TokenApi'
import { Department } from './DepartmentApi'
import { Cron } from './CronApi'
import { CronLog } from './CronLogApi'
import { CronPreset } from './CronPresetApi'
import { Country } from './CountryApi'

export class Apis {
  constructor (params) {
    this.app = new App(params)
    this.apparience = new Apparience(params)
    this.company = new Company(params)
    this.config = new Config(params)
    this.role = new Role(params)
    this.service = new Service(params)
    this.user = new User(params)
    this.template = new Template(params)
    this.accessPolicy = new AccessPolicy(params)
    this.token = new Token(params)
    this.department = new Department(params)
    this.cron = new Cron(params)
    this.cronLog = new CronLog(params)
    this.cronPreset = new CronPreset(params)
    this.country = new Country(params)
  }
}