#ifndef SKILLTREE_H
#define SKILLTREE_H

#include "SkillNode.h"
#include <string>

class SkillTree {
private:
    SkillNode* root;
public:
    SkillTree(std::string rootName);
    ~SkillTree();
    void addSkill(std::string parentName, std::string skillName);
    bool hasSkill(std::string skillName);
};

#endif
