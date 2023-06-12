import { engine, executeTask, Material, Transform } from '@dcl/sdk/ecs'
import { Color4 } from '@dcl/sdk/math'

import { createCube } from './factory'
import { bounceScalingSystem, circularSystem, spawnerSystem } from './systems'

import { setupUi } from './ui'
import { skyboxPZ } from './skybox'





export function main() {
  setupUi()

  // Create my main cube and color it.
  const cube = createCube(8, 1, 8)
  Material.setPbrMaterial(cube, { albedoColor: Color4.create(1.0, 0.85, 0.42) })

  
  Transform.getMutable(skyboxPZ)
}