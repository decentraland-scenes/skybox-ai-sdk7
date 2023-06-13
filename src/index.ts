import { Transform } from '@dcl/sdk/ecs'
import { skyboxPZ } from './skybox'
import { movePlayerTo } from '~system/RestrictedActions'
import { Vector3 } from '@dcl/sdk/math'
import { height, sceneSizeX, sceneSizeZ } from './resources'


export function main() {
  Transform.getMutable(skyboxPZ)
} 

movePlayerTo({newRelativePosition: Vector3.create(sceneSizeX/2,height/2 + 5,sceneSizeZ/2)})