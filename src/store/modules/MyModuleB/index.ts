import { store } from '@/store'
import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'

@Module({
  namespaced: true,
  dynamic: true,
  store,
  name: 'MyModuleB'
})
class MyModuleB extends VuexModule {

  private id: string = '12'
  private name: string = 'SUZUKI'

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

  get getZeroPaddingId (): (digit: number) => string {

    return (digit: number) => {
      return (`${Array(digit).join('0')}${this.id}` ).slice(-digit)
    }
  }
}

export default getModule(MyModuleB)
