import { store } from '@/store'
import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'

@Module({
  namespaced: true,
  dynamic: true,
  store,
  name: 'MyModuleA'
})
class MyModuleA extends VuexModule {

  private id: string = '3'
  private name: string = 'YAMADA'

  @Mutation
  private SET_ID (id: string): void {

    this.id = id
  }

  @Mutation
  private SET_NAME (name: string): void {

    this.name = name
  }

  @Action
  public setId (id: string): void {

    this.SET_ID(id)
  }

  @Action
  public setName (name: string): void {

    this.SET_NAME(name)
  }

  get getId (): string {

    return this.id
  }

  get getName (): string {

    return this.name
  }

  get getNameAddSuf (): (suf: string) => string {

    return (suf: string) => `${suf}${this.name}`
  }
}

export default getModule(MyModuleA)
