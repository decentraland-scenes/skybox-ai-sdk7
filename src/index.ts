import { MeshCollider, Transform, engine } from '@dcl/sdk/ecs'
import { skyboxPZ } from './skybox'
import { movePlayerTo } from '~system/RestrictedActions'
import { Vector3 } from '@dcl/sdk/math'
import { height, sceneSizeX, sceneSizeZ } from './resources'


export function main() {
  Transform.getMutable(skyboxPZ)
} 

let testPlatform = engine.addEntity()
Transform.create(testPlatform, {
    position: Vector3.create(sceneSizeX/2,height/2,sceneSizeZ/2),
    scale: Vector3.create(16,1,16)
})
MeshCollider.setBox(testPlatform)

movePlayerTo({newRelativePosition: Vector3.create(sceneSizeX/2,height/2 + 5,sceneSizeZ/2)})