import { Transform } from '@dcl/sdk/ecs'
import { skyboxPZ } from './skybox'


export function main() {
  Transform.getMutable(skyboxPZ)
}